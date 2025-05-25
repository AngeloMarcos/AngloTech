import 'reflect-metadata';
import { AppDataSource } from './data-source';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

async function seed() {
  const ds   = await AppDataSource.initialize();
  const repo = ds.getRepository(User);

  // 1) Gero um hash para “admin”
  const adminPassword = await bcrypt.hash('admin', 10);

  const demoUsers = [
    {
      name:     'Administrador',
      email:    'admin@anglotech.com',
      password: adminPassword,
    },
    { name: 'Alice Dev',  email: 'alice@anglotech.com', password: await bcrypt.hash('senha123', 10) },
    { name: 'Bob Coder',  email: 'bob@anglotech.com',   password: await bcrypt.hash('senha123', 10) },
    { name: 'Carol Ops',  email: 'carol@anglotech.com', password: await bcrypt.hash('senha123', 10) },
  ];

  for (const u of demoUsers) {
    const exists = await repo.findOneBy({ email: u.email });
    if (!exists) {
      await repo.save(repo.create(u));
      console.log(`Usuário criado: ${u.email}`);
    }
  }

  await ds.destroy();
  console.log('Seed completado com sucesso.');
}

seed().catch(err => {
  console.error('Erro no seed:', err);
  process.exit(1);
});
