import prisma from '@/lib/prisma'
import { faker } from '@faker-js/faker'

async function main() {
  console.log("Seeding furniture data...")

  // 1. إنشاء الـ Classes (التصنيفات) - ضروري لأن Product يعتمد عليه [cite: 14, 30]
  const classData = [
    { title: 'Living Room', slug: 'living-room', description: 'Sofas, coffee tables and more' },
    { title: 'Bedroom', slug: 'bedroom', description: 'Beds, wardrobes and nightstands' },
    { title: 'Office', slug: 'office', description: 'Desks, chairs and bookshelves' },
    { title: 'Dining Room', slug: 'dining-room', description: 'Dining tables and chairs' },
  ]

  const allClasses = []
  for (const item of classData) {
    const cls = await prisma.class.upsert({
      where: { slug: item.slug },
      update: {},
      create: item,
    })
    allClasses.push(cls)
  }

  // 2. إنشاء الـ Styles (الأنماط) - ضروري لأن Product يعتمد عليه [cite: 16, 29]
  const styleData = [
    { title: 'Modern', slug: 'modern', description: 'Clean lines and simple designs' },
    { title: 'Classic', slug: 'classic', description: 'Traditional and elegant' },
    { title: 'Minimalist', slug: 'minimalist', description: 'Less is more' },
    { title: 'Industrial', slug: 'industrial', description: 'Raw and edgy' },
  ]

  const allStyles = []
  for (const item of styleData) {
    const style = await prisma.style.upsert({
      where: { slug: item.slug },
      update: {},
      create: item,
    })
    allStyles.push(style)
  }

  // 3. إنشاء الألوان (Colors)
  const colors = [
    { title: 'Walnut', slug: 'walnut', colorCode: '#5d4037' },
    { title: 'Oak', slug: 'oak', colorCode: '#9e7e53' },
    { title: 'Charcoal', slug: 'charcoal', colorCode: '#37474f' },
    { title: 'Cloud White', slug: 'cloud-white', colorCode: '#f5f5f5' },
    { title: 'Forest Green', slug: 'forest-green', colorCode: '#2e7d32' },
    { title: 'Navy Blue', slug: 'navy-blue', colorCode: '#1a237e' },
  ]

  const allColors = []
  for (const color of colors) {
    const c = await prisma.color.upsert({
      where: { slug: color.slug },
      update: {},
      create: color,
    })
    allColors.push(c)
  }

  // 4. إنشاء مستخدم Admin [cite: 17, 18, 22]
  await prisma.user.upsert({
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

  // 5. إنشاء المصانع (Factories) [cite: 24, 25]
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

  // 6. إنشاء المنتجات (Products) [cite: 26, 27, 28]
  for (let i = 0; i < 24; i++) {
    const productName = faker.commerce.productName()
    const factory = faker.helpers.arrayElement(factories)
    const selectedStyle = faker.helpers.arrayElement(allStyles)
    const selectedClass = faker.helpers.arrayElement(allClasses)

    await prisma.product.create({
      data: {
        title: productName,
        model: faker.string.alphanumeric(10).toUpperCase() + i, // unique model 
        miniDescription: faker.commerce.productDescription(),
        description: faker.lorem.paragraphs(2),
        status: 'published',
        quantity: faker.number.int({ min: 10, max: 100 }),
        price: faker.number.int({ min: 1000, max: 50000 }),
        discount: faker.helpers.arrayElement([0, 10, 15, 20]),
        mainImage: faker.image.url(),
        images: [faker.image.url(), faker.image.url(), faker.image.url()],
        factoryId: factory.id,
        styleId: selectedStyle.id,
        classId: selectedClass.id,
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