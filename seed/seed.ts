import prisma from '@/lib/prisma'
import { faker } from '@faker-js/faker'


async function main() {
  console.log("Seeding furniture data...")

  // 1. Fetch existing Classes and Styles
  const allClasses = await prisma.class.findMany()
  const allStyles = await prisma.style.findMany()

  if (allClasses.length === 0 || allStyles.length === 0) {
    console.error("Error: Please ensure Classes and Styles exist in the database before seeding products.")
    process.exit(1)
  }

  // 2. Create Colors
  const colors = [
    { title: 'Walnut', slug: 'walnut', colorCode: '#5d4037' },
    { title: 'Oak', slug: 'oak', colorCode: '#9e7e53' },
    { title: 'Charcoal', slug: 'charcoal', colorCode: '#37474f' },
    { title: 'Cloud White', slug: 'cloud-white', colorCode: '#f5f5f5' },
    { title: 'Forest Green', slug: 'forest-green', colorCode: '#2e7d32' },
    { title: 'Navy Blue', slug: 'navy-blue', colorCode: '#1a237e' },
  ]

  for (const color of colors) {
    await prisma.color.upsert({
      where: { slug: color.slug },
      update: {},
      create: color,
    })
  }

  // 4. Create a Demo Admin/User [cite: 16, 17]
  await prisma.user.upsert({
    where: { email: 'admin@furniture-store.com' },
    update: {
      name: 'Ahmed Admin',
      email: 'admin@furniture-store.com',
      role: 'admin',
      city: 'Cairo',
      image: faker.image.avatar(),
    },
    create: {
      name: 'Ahmed Admin',
      email: 'admin@furniture-store.com',
      role: 'admin',
      city: 'Cairo',
      image: faker.image.avatar(),
    },
  })

  // 5. Create Factories (Manufacturers) [cite: 22, 23]
  const factories = []
  for (let i = 0; i < 4; i++) {
    const name = faker.company.name() + " Furniture Co."
    const factory = await prisma.factory.create({
      data: {
        name: name,
        slug: faker.helpers.slugify(name).toLowerCase() + "-" + faker.string.alphanumeric(5),
        country: 'Egypt',
        state: 'Cairo',
        mobile: faker.phone.number(),
        info: faker.lorem.paragraph(),
      },
    })
    factories.push(factory)
  }

  // 6. Seed Products (24 products)
  const allColors = await prisma.color.findMany()

  for (let i = 0; i < 24; i++) {
    const productName = faker.commerce.productName()
    const factory = faker.helpers.arrayElement(factories)

    await prisma.product.create({
      data: {
        title: productName,
        model: faker.string.alphanumeric(10).toUpperCase() + i,
        miniDescription: faker.commerce.productDescription(),
        description: faker.lorem.paragraphs(2),
        status: 'published',
        quantity: faker.number.int({ min: 10, max: 100 }),
        price: faker.number.int({ min: 1000, max: 50000 }),
        discount: faker.helpers.arrayElement([0, 10, 15, 20]),
        mainImage: faker.image.url(),
        images: [
          faker.image.url(),
          faker.image.url(),
          faker.image.url()
        ],
        factoryId: factory.id,
        styleId: faker.helpers.arrayElement(allStyles).id,
        classId: faker.helpers.arrayElement(allClasses).id,
        color: {
          connect: faker.helpers.arrayElements(allColors, { min: 1, max: 3 }).map(c => ({ id: c.id }))
        }
      },
    })
  }

  console.log("Seeding completed successfully.")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })