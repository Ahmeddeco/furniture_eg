import prisma from '@/lib/prisma'
import { faker } from '@faker-js/faker'


async function main() {
  console.log("Seeding furniture data...")

  // 1. Create specific Classes (Categories) [cite: 13]
  const classes = [
    { title: 'Living Room', slug: 'living-room', description: 'Sofas, coffee tables, and entertainment centers.' },
    { title: 'Bedroom', slug: 'bedroom', description: 'Beds, nightstands, and wardrobes.' },
    { title: 'Office', slug: 'office', description: 'Ergonomic chairs and executive desks.' },
    { title: 'Dining', slug: 'dining', description: 'Dining tables and upholstered chairs.' },
  ]

  for (const item of classes) {
    await prisma.class.upsert({
      where: { slug: item.slug },
      update: {},
      create: item,
    })
  }

  // 2. Create Furniture Styles [cite: 15]
  const styles = [
    { title: 'Mid-Century Modern', slug: 'mid-century-modern' },
    { title: 'Industrial', slug: 'industrial' },
    { title: 'Scandinavian', slug: 'scandinavian' },
    { title: 'Minimalist', slug: 'minimalist' },
  ]

  for (const style of styles) {
    await prisma.style.upsert({
      where: { slug: style.slug },
      update: {},
      create: style,
    })
  }

  // 3. Create a Demo Admin/User [cite: 16, 17]
  const admin = await prisma.user.upsert({
    where: { email: 'admin@furniture-store.com' },
    update: {},
    create: {
      name: 'Ahmed Admin',
      email: 'admin@furniture-store.com',
      role: 'admin',
      city: 'Cairo',
      image: faker.image.avatar(),
    },
  })

  // 4. Create Factories (Manufacturers) [cite: 22, 23]
  const factories = await Promise.all(
    Array.from({ length: 3 }).map(() =>
      prisma.factory.create({
        data: {
          name: faker.company.name() + " Furniture Co.",
          slug: faker.helpers.slugify(faker.company.name().toLowerCase()),
          country: 'Egypt',
          state: 'Cairo',
          mobile: faker.phone.number(),
          info: faker.lorem.paragraph(),
        },
      })
    )
  )

  // 5. Seed Products [cite: 24, 25, 26]
  const allStyles = await prisma.style.findMany()
  const allClasses = await prisma.class.findMany()

  for (const factory of factories) {
    for (let i = 0; i < 5; i++) {
      const productName = faker.commerce.productName()
      await prisma.product.create({
        data: {
          title: productName,
          model: faker.string.alphanumeric(8).toUpperCase(),
          miniDescription: faker.commerce.productDescription(),
          description: faker.lorem.paragraphs(2),
          status: 'published',
          quantity: faker.number.int({ min: 10, max: 100 }),
          price: faker.number.int({ min: 1000, max: 50000 }),
          discount: faker.helpers.arrayElement([0, 10, 15, 20]),
          mainImage: `https://loremflickr.com/640/480/furniture?lock=${faker.number.int(100)}`,
          images: [
            `https://loremflickr.com/640/480/interior?lock=${faker.number.int(100)}`,
            `https://loremflickr.com/640/480/home?lock=${faker.number.int(100)}`
          ],
          factoryId: factory.id,
          styleId: faker.helpers.arrayElement(allStyles).id,
          classId: faker.helpers.arrayElement(allClasses).id,
        },
      })
    }
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