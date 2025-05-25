// backend/src/seed.ts
import 'reflect-metadata';
import { AppDataSource } from './data-source';
// Antes: import { User } from './src/entities/user.entity';
import { User } from './entities/User';

async function seed() {
  const ds = await AppDataSource.initialize();
  const repo = ds.getRepository(User);

  const demoUsers = [
    { name: 'Alice Desenvolvimento', email: 'alice@anglotech.com', password: 'senha123' },
    { name: 'Bob Programador',       email: 'bob@anglotech.com',   password: 'senha123' },
    { name: 'Carol DevOps',          email: 'carol@anglotech.com', password: 'senha123' },
  ];

  for (const u of demoUsers) {
    const user = repo.create(u);
    await repo.save(user);
    console.log(`Usuário seed criado: ${u.email}`);
  }

  await ds.destroy();
  console.log('Seed finalizado com sucesso.');
}

seed().catch(err => {
  console.error('Erro no seed:', err);
  process.exit(1);
});
