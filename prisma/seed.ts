import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Iniciando seed do banco...')

  await prisma.shortedLinks.createMany({
    data: [
      {
        short_link: 'google',
        original_link: 'https://www.google.com',
        name: 'Google',
      },
      {
        short_link: 'github',
        original_link: 'https://github.com',
        name: 'GitHub',
      },
      {
        short_link: 'youtube',
        original_link: 'https://www.youtube.com',
        name: 'YouTube',
        expiration_date: new Date('2030-01-01'),
      },
      {
        short_link: 'linkedin',
        original_link: 'https://www.linkedin.com',
        name: 'LinkedIn'
      },
    ],
    skipDuplicates: true, // permite rodar o seed mais de uma vez
  })

  console.log('✅ Seed finalizado com sucesso!')
}

main()
  .catch((error) => {
    console.error('❌ Erro ao executar seed:', error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
