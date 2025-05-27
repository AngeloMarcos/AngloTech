import 'reflect-metadata';
import { AppDataSource } from './data-source';
import { User } from '../backend/src/entities/user.entity';
import * as bcrypt from 'bcrypt';

async function seed() {
  const ds   = await AppDataSource.initialize();
  const repo = ds.getRepository(User);

  // Hash de ‘admin’
  const adminPassword = await bcrypt.hash('admin', 10);

  
  const demoUsers = [
    {
      name:     'Administrador',
      email:    'admin@anglotech.com',
      password: adminPassword,
    },
    // … outros usuários …
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