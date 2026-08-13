import prisma from "@/lib/prisma"
import { faker } from '@faker-js/faker'


async function main() {
  console.log("⏳ بدء عملية حقن بيانات الأثاث والديكور الحقيقية المصلحة...")

  // تفريغ الجداول القديمة لتجنب تكرار البيانات الفريدة (مستحسن في البيئة التطويرية)
  await prisma.favorite.deleteMany({})
  await prisma.product.deleteMany({})
  await prisma.factory.deleteMany({})
  await prisma.color.deleteMany({})
  await prisma.style.deleteMany({})
  await prisma.class.deleteMany({})

  // ==========================================
  // 1. إنشاء الـ Classes (التصنيفات الفعليّة للأثاث)[cite: 3]
  // ==========================================
  const classData = [
    { title: 'غرف المعيشة', slug: 'living-room', description: 'مجموعات أرائك فاخرة، كراسي استرخاء، وطاولات قهوة مصممة لراحة يومية.' },
    { title: 'غرف النوم', slug: 'bedroom', description: 'أسرة مريحة، خزائن ملابس واسعة، وطاولات سرير جانبية بتصميم هادئ.' },
    { title: 'غرف السفرة', slug: 'dining-room', description: 'طاولات طعام أنيقة مع كراسي مريحة لتجمعات عائلية دافئة.' },
    { title: 'المكاتب المنزلية', slug: 'home-office', description: 'مكاتب عمل ومقاعد مريحة مخصصة للإنتاجية والتركيز العالي.' },
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
  console.log(`✅ تم إعداد ${allClasses.length} تصنيفات رئيسية.`)

  // ==========================================
  // 2. إنشاء الـ Styles (الأنماط والديكورات العالمية)[cite: 3]
  // ==========================================
  const styleData = [
    { title: 'مودرن / Modern', slug: 'modern', description: 'خطوط مستقيمة ونظيفة، بساطة متناهية، وألوان محايدة تركز على الوظيفة والراحة.' },
    { title: 'كلاسيك / Classic', slug: 'classic', description: 'فخامة أصيلة، حفر يدوي على الخشب (أويمة)، وتفاصيل غنية مستوحاة من القصور التاريخية.' },
    { title: 'نيو كلاسيك / New Classic', slug: 'new-classic', description: 'مزيج ساحر يجمع بين فخامة الخطوط الكلاسيكية وبساطة وعصرية النمط المودرن.' },
    { title: 'مينيماليست / Minimalist', slug: 'minimalist', description: 'الحد الأدنى من التفاصيل، مساحات مفتوحة مريحة للعين، والتركيز على الفراغ والمواد الطبيعية.' },
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
  console.log(`✅ تم إعداد ${allStyles.length} أنماط تصميم ديكور معتمدة.`)

  // ==========================================
  // 3. إنشاء الألوان وخامات الأخشاب والأقمشة (Colors)[cite: 3]
  // ==========================================
  const colorsData = [
    { title: 'بني جوزي / Walnut', slug: 'walnut', colorCode: '#5d4037' },
    { title: 'خشب البلوط / Oak', slug: 'oak', colorCode: '#9e7e53' },
    { title: 'رمادي فاحم / Charcoal', slug: 'charcoal', colorCode: '#37474f' },
    { title: 'أبيض غيم / Cloud White', slug: 'cloud-white', colorCode: '#f5f5f5' },
    { title: 'بيج كريمي / Creamy Beige', slug: 'creamy-beige', colorCode: '#f5f5dc' },
    { title: 'أزرق ملوكي / Royal Navy', slug: 'royal-navy', colorCode: '#1a237e' },
  ]

  const allColors = []
  for (const color of colorsData) {
    const c = await prisma.color.upsert({
      where: { slug: color.slug },
      update: {},
      create: color,
    })
    allColors.push(c)
  }
  console.log(`✅ تم إعداد ${allColors.length} ألوان وخامات أساسية.`)

  // ==========================================
  // 4. إنشاء مستخدم مخصص (Admin)[cite: 3]
  // ==========================================
  await prisma.user.upsert({
    where: { email: 'admin@furniture-store.com' },
    update: {},
    create: {
      name: 'أحمد محمد عبد الفتاح',
      email: 'admin@furniture-store.com',
      role: 'admin',
      country: 'Egypt',
      state: 'Cairo',
      city: 'Nasr City',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    },
  })

  // ==========================================
  // 5. إنشاء مصانع وورش أثاث حقيقية (Factories)[cite: 3]
  // ==========================================
  const factoriesData = [
    { name: 'مصنع دمياط للأثاث الفاخر', slug: 'domiat-luxury-furniture', info: 'متخصصون في الحفر اليدوي الفاخر على الخشب الزان الأحمر الطبيعي وخبرة تمتد لعقود.', country: 'Egypt', state: 'Damietta', city: 'المنطقة الصناعية', mobile: '+201012345678' },
    { name: 'Modern Line Factories', slug: 'modern-line-factories', info: 'خطوط إنتاج آلية متطورة لتصنيع الأثاث المودرن والـ Minimalist بجودة أوروبية وخامات مقاومة للخدش.', country: 'Egypt', state: 'Cairo', city: 'التجمع الخامس', mobile: '+201098765432' },
    { name: 'الورشة الإيطالية للتصميم والتنفيذ', slug: 'italian-design-workshop', info: 'ورشة متخصصة في دمج المعادن مع الأخشاب لتنفيذ أرقى قطع النيو كلاسيك والمكاتب الفخمة.', country: 'Egypt', state: 'Giza', city: '6th of October', mobile: '+201122334455' }
  ]

  const allFactories = []
  for (const item of factoriesData) {
    const factory = await prisma.factory.upsert({
      where: { slug: item.slug },
      update: {},
      create: item,
    })
    allFactories.push(factory)
  }
  console.log(`✅ تم تسجيل ${allFactories.length} مصانع شريكة بنجاح.`)

  // مخرجات الـ Classes والـ Styles لسهولة التوزيع المباشر
  const [livingRoom, bedroom, diningRoom, office] = allClasses
  const [modern, classic, newClassic, minimalist] = allStyles

  // ==========================================
  // 6. مصفوفة المنتجات الواقعية (تم تصحيح الأنواع للـ Enums هنا باستخدام as const)[cite: 3]
  // ==========================================
  const realProducts = [
    // --- 📌 منتجات نمط: MODERN ---
    {
      title: 'أريكة ليفربول الثلاثية الذكية',
      model: 'MOD-LIV-001',
      miniDescription: 'أريكة مودرن مبطنة بإسفنج عالي الكثافة مع منافذ شحن USB مدمجة وقماش معالج ضد البقع.',
      description: 'أريكة مودرن تجمع بين الأناقة والوظيفة الذكية، الهيكل الداخلي من خشب الزان الأحمر المحمل، الأرجل من الفولاذ المقاوم للصدأ المطلي باللون الذهبي المطفي، القماش تركي هيدروفوبيك طارد للسوائل وسهل التنظيف.',
      status: 'published' as const, quantity: 15, lowStock: 3, price: 24500, discount: 10,
      mainImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc',
      images: ['https://images.unsplash.com/photo-1550581190-9c1c48d21d6c', 'https://images.unsplash.com/photo-1484101403633-562f891dc89a'],
      styleId: modern.id, classId: livingRoom.id, factoryId: allFactories[1].id,
      colorsConnect: ['charcoal', 'royal-navy']
    },
    {
      title: 'غرفة نوم "أوسلو" الاسكندنافية',
      model: 'MOD-BED-002',
      miniDescription: 'سرير مزدوج 180سم مع 2 كومودينو بتصميم ناعم وألوان مهدئة للأعصاب.',
      description: 'تصميم مودرن مستوحى من الطراز الاسكندنافي المريح. السرير يحتوي على سحارة تخزين هيدروليكية سفلية مخفية للاستفادة الكاملة من المساحات. مصنع من ألواح الكاونتر وقشرة البلوط الطبيعي.',
      status: 'published' as const, quantity: 8, lowStock: 2, price: 48000, discount: 0,
      mainImage: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      images: ['https://images.unsplash.com/photo-1540518614846-7eded433c457'],
      styleId: modern.id, classId: bedroom.id, factoryId: allFactories[1].id,
      colorsConnect: ['oak', 'cloud-white']
    },
    {
      title: 'مكتب العمل التنفيذي "تيتان"',
      model: 'MOD-OFF-003',
      miniDescription: 'مكتب دراسة وعمل واسع مزود بوحدة أدراء جانبية متحركة ومنظم كابلات مخفي.',
      description: 'مكتب مودرن يمنحك مساحة عمل مثالية للإنتاجية والتركيز. السطح مقاوم للخدش والحرارة، ومزود بفتحة هندسية لترتيب أسلاك الكومبيوتر والشواحن بشكل جمالي مختفي تماماً.',
      status: 'published' as const, quantity: 20, lowStock: 5, price: 12500, discount: 15,
      mainImage: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd',
      images: ['https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2'],
      styleId: modern.id, classId: office.id, factoryId: allFactories[2].id,
      colorsConnect: ['charcoal', 'walnut']
    },

    // --- 📌 منتجات نمط: CLASSIC ---
    {
      title: 'طقم صالون "لويس الرابع عشر" الفاخر',
      model: 'CLS-LIV-004',
      miniDescription: 'صالون كلاسيكي ملكي محفور يدوياً بالكامل ومطلي بماء الذهب العيار النقي.',
      description: 'تحفة فنية فريدة صُنعت بالكامل في دمياط. الطقم يتكون من أريكة ثلاثية، أريكة ثنائية، و2 كرسي فوتيه مع طاولة وسط رخامية هندسية. القماش صالون حرير دمشقي مطرز بخيوط السيرما البارزة.',
      status: 'published' as const, quantity: 3, lowStock: 1, price: 135000, discount: 0,
      mainImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92',
      images: ['https://images.unsplash.com/photo-1513694203232-719a280e022f'],
      styleId: classic.id, classId: livingRoom.id, factoryId: allFactories[0].id,
      colorsConnect: ['creamy-beige']
    },
    {
      title: 'غرفة سفرة "الملكية الأنتيك"',
      model: 'CLS-DIN-005',
      miniDescription: 'طاولة طعام كلاسيك كاش تسع 8 أفراد مع نيش وبوفيه مرايا محفورة بالذهب.',
      description: 'سفرة كلاسيكية فخمة جداً، أرجل الطاولة محفورة على شكل أسود أرستقراطية من خشب الزان الصلب، السطح مغطى بقشرة الجوز الطبيعية بتجزيعات هندسية متناظرة ومحمية بزجاج سيكوريت عالي المقاومة.',
      status: 'published' as const, quantity: 4, lowStock: 1, price: 95000, discount: 5,
      mainImage: 'https://images.unsplash.com/photo-1617806118233-18e1db207f62',
      images: ['https://images.unsplash.com/photo-1577140917170-285929fb55b7'],
      styleId: classic.id, classId: diningRoom.id, factoryId: allFactories[0].id,
      colorsConnect: ['walnut']
    },
    {
      title: 'سرير الكابوتونيه الكلاسيكي "فيكتوريا"',
      model: 'CLS-BED-006',
      miniDescription: 'سرير كلاسيكي بظهر كابوتونيه مرتفع ومبطن يدوي قطيفة إيطالي وتاج ذهبي بارز.',
      description: 'يتميز هذا السرير بمتانة منقطعة النظير مع لمسة فخامة للمخادع الملكية. الظهر مبطن بالكامل يدوياً بأزرار عميقة غائرة محاطة بإطار خشبي محفور يدوياً بدهان أكسيديه ذهبي معتق.',
      status: 'published' as const, quantity: 6, lowStock: 1, price: 32000, discount: 10,
      mainImage: 'https://images.unsplash.com/photo-1544816155-12df9643f363',
      images: ['https://images.unsplash.com/photo-1566665797739-1674de7a421a'],
      styleId: classic.id, classId: bedroom.id, factoryId: allFactories[0].id,
      colorsConnect: ['creamy-beige', 'royal-navy']
    },

    // --- 📌 منتجات نمط: NEW CLASSIC ---
    {
      title: 'غرفة سفرة "فينيسيا" نيو كلاسيك',
      model: 'NCL-DIN-007',
      miniDescription: 'طاولة طعام دائرية نيو كلاسيك مع 6 كراسي مخملية مبطنة وأرجل ستانلس ذهبي.',
      description: 'مزيج رائع يجمع عراقة الخشب وبساطة العصر الحالي، الطاولة تأتي بسطح رخامي يوناني فاخر سهل التنظيف مدعوم بأرجل خشبية مطعمة بشرائح الستانلس الذهبي المضاد للصدأ والرطوبة.',
      status: 'published' as const, quantity: 5, lowStock: 2, price: 62000, discount: 20,
      mainImage: 'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf',
      images: ['https://images.unsplash.com/photo-1530018607912-eff2df114f12'],
      styleId: newClassic.id, classId: diningRoom.id, factoryId: allFactories[2].id,
      colorsConnect: ['cloud-white', 'creamy-beige']
    },
    {
      title: 'ركنة ليفنج أميريكان "هيلين"',
      model: 'NCL-LIV-008',
      miniDescription: 'ركنة نيو كلاسيك على شكل حرف L مريحة مع شازلونج ممتد ووسائد من ريش النعام.',
      description: 'الركنة المثالية التي تجمع فخامة المظهر مع راحة غرف المعيشة اليومية. شاسيه خشب زان بالكامل، مع وسائد جلوس هجينة من الإسفنج الكثيف وطبقة علوية من ريش النعام الصناعي لراحة غير مسبوقة.',
      status: 'published' as const, quantity: 10, lowStock: 2, price: 38000, discount: 0,
      mainImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
      images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7'],
      styleId: newClassic.id, classId: livingRoom.id, factoryId: allFactories[1].id,
      colorsConnect: ['charcoal', 'creamy-beige']
    },
    {
      title: 'دولاّب ملابس زجاجي بإنارة ذكية',
      model: 'NCL-BED-009',
      miniDescription: 'دولاب غرف نوم نيو كلاسيك ضخم بأبواب زجاج فاميه شفاف وهيكل إنارة LED مدمج وعتبات ذهبية.',
      description: 'يعيد تعريف تخزين الملابس وتنسيق الغرفة، الأبواب مصنوعة من زجاج السيكوريت الفاميه المقاوم للصدمات مع فريم ألومنيوم أسود معتم، تضيء الأرفف تلقائياً بمجرد فتح الأبواب عبر مستشعرات الحركة الذكية.',
      status: 'published' as const, quantity: 7, lowStock: 2, price: 41000, discount: 10,
      mainImage: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2',
      images: ['https://images.unsplash.com/photo-1558882224-cca166733360'],
      styleId: newClassic.id, classId: bedroom.id, factoryId: allFactories[1].id,
      colorsConnect: ['charcoal', 'oak']
    },

    // --- 📌 منتجات نمط: MINIMALIST ---
    {
      title: 'طاولة قهوة "كيوتو" اليابانية المخفية',
      model: 'MIN-LIV-010',
      miniDescription: 'طاولة قهوة مينيماليست منخفضة الارتفاع ومصنوعة بالكامل من كتلة خشب بلوط صلبة ناصعة.',
      description: 'تجسد فلسفة "الأقل هو الأكثر"، طاولة قهوة منخفضة الارتفاع بدون أرجل ظاهرة تبدو كأنها تطفو فوق الأرض. تم معالجتها بزيوت طبيعية لحماية تكتلات وتجزيعات خشب البلوط الطبيعي دون تغيير لونه الأصيل.',
      status: 'published' as const, quantity: 22, lowStock: 4, price: 9200, discount: 12,
      mainImage: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88',
      images: ['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'],
      styleId: minimalist.id, classId: livingRoom.id, factoryId: allFactories[1].id,
      colorsConnect: ['oak', 'cloud-white']
    },
    {
      title: 'مكتب دراسة الحائط العائم "زين"',
      model: 'MIN-OFF-011',
      miniDescription: 'مكتب مينيماليست يثبت على الحائط مباشرة بدون أرجل لتوفير أقصى مساحة فراغ أرضية ممكنة.',
      description: 'الحل الأمثل للشقق الاستوديو والمساحات الصغيرة. مكتب بخطوط هندسية مستقيمة حادة يغلق ليصبح قطعة ديكور مسطحة على الحائط ويفتح ليوفر سطح عمل مريح للابتوب والكتب مع رفين داخليين.',
      status: 'published' as const, quantity: 25, lowStock: 6, price: 6800, discount: 0,
      mainImage: 'https://images.unsplash.com/photo-1517502884422-41eaaced0168',
      images: ['https://images.unsplash.com/photo-1505797149-43b0069ec26b'],
      styleId: minimalist.id, classId: office.id, factoryId: allFactories[2].id,
      colorsConnect: ['cloud-white', 'charcoal']
    },
    {
      title: 'سرير "نيرفانا" الأرضي المفتوح',
      model: 'MIN-BED-012',
      miniDescription: 'سرير مينيماليست منخفض جداً ممتد الأطراف الجانبية ليعمل كطاولات جانبية بديلة للكومودينو.',
      description: 'سرير بتصميم ياباني مميز مرتفع عن الأرض بـ 15 سم فقط، البنية الهيكلية تمتد على الجانبين لتغنيك عن شراء كومودينو منفصل حيث تتيح لك وضع هاتفك، كتابك، أو كوب القهوة مباشرة على امتداد هيكل السرير المريح.',
      status: 'published' as const, quantity: 9, lowStock: 3, price: 19500, discount: 5,
      mainImage: 'https://images.unsplash.com/photo-1505693395321-883724634266',
      images: ['https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af'],
      styleId: minimalist.id, classId: bedroom.id, factoryId: allFactories[1].id,
      colorsConnect: ['oak', 'cloud-white']
    }
  ]

  // ==========================================
  // 7. الـ Loop المعالج لربط العلاقات بنمط connect الآمن[cite: 3]
  // ==========================================
  for (const prod of realProducts) {
    const { colorsConnect, factoryId, styleId, classId, ...productData } = prod

    const selectedColors = allColors.filter(c => colorsConnect.includes(c.slug))

    await prisma.product.create({
      data: {
        ...productData,
        bluePrint: `المقاسات الهندسية الفنية: العرض: ${faker.number.int({ min: 80, max: 280 })}سم | العمق: ${faker.number.int({ min: 50, max: 100 })}سم | الارتفاع: ${faker.number.int({ min: 45, max: 210 })}سم`,
        factory: { connect: { id: factoryId } },
        style: styleId ? { connect: { id: styleId } } : undefined,
        class: classId ? { connect: { id: classId } } : undefined,
        color: {
          connect: selectedColors.map(c => ({ id: c.id }))
        }
      }
    })
  }

  console.log(`🚀 تمت العملية بنجاح كامل! تم تنظيف وحقن ${realProducts.length} منتج ديكوري معتمد دون أي تعارض في الـ TypeScript Enums.`)
}

main()
  .catch((e) => {
    console.error("❌ حدث خطأ أثناء عملية الـ Seeding:", e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })