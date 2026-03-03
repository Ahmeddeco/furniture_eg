import { ProductStatus, Role } from '@/generated/prisma/enums'
import prisma from '@/lib/prisma'
import { faker } from '@faker-js/faker'


async function main() {
  console.log("⏳ بدا عملية الـ Seeding...")

  // 1. إنشاء مستخدم (Admin/Owner)
  const user = await prisma.user.upsert({
    where: { email: 'ahmed@example.com' },
    update: {},
    create: {
      email: 'ahmed@example.com',
      name: faker.person.fullName(),
      role: Role.admin,
      image: faker.image.avatar(),
      mobile: faker.phone.number()
    },
  })

  // 2. إنشاء تصنيفات (Categories)
  const categories = await Promise.all(
    ['Ceiling Lamps', 'Wall Decor', 'Furniture'].map((title) =>
      prisma.category.create({
        data: {
          title,
          image: faker.image.url(),
        },
      })
    )
  )

  // 3. إنشاء مصانع (Factories)
  const factories = await Promise.all(
    Array.from({ length: 3 }).map(() =>
      prisma.factory.create({
        data: {
          name: faker.company.name(),
          country: 'Egypt',
          state: 'Cairo',
          mobile: faker.phone.number(),
          owner: { connect: { id: user.id } }, // ربط المصنع بالمستخدم
        },
      })
    )
  )

  // 4. إنشاء منتجات (Products)
  for (const factory of factories) {
    for (const category of categories) {
      await prisma.product.create({
        data: {
          title: faker.commerce.productName(),
          model: faker.string.alphanumeric(5).toUpperCase(),
          miniDescription: faker.commerce.productDescription(),
          price: faker.number.int({ min: 1000, max: 50000 }),
          quantity: faker.number.int({ min: 10, max: 100 }),
          status: ProductStatus.published,
          mainImage: faker.image.url(),
          images: [faker.image.url(), faker.image.url()],
          categoryId: category.id,
          factoryId: factory.id,
        },
      })
    }
  }

  console.log("✅ Seeding Successful")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })