import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { User } from "./entities/user.entity";
import * as bcrypt from "bcrypt";

async function seed() {
  const ds = await AppDataSource.initialize();
  const repo = ds.getRepository(User);

  const adminHash = await bcrypt.hash("admin", 10);
  const demoUsers = [
    {
      name: "Administrador 1",
      email: "admin1@anglotech.com",
      password: adminHash,
    },
    {
      name: "Administrador 2",
      email: "admin2@anglotech.com",
      password: adminHash,
    },
    {
      name: "Administrador 3",
      email: "admin3@anglotech.com",
      password: adminHash,
    },
    {
      name: "Administrador 4",
      email: "admin4@anglotech.com",
      password: adminHash,
    },
    {
      name: "Administrador 5",
      email: "admin5@anglotech.com",
      password: adminHash,
    },
  ];

  for (const u of demoUsers) {
    const exists = await repo.findOneBy({ email: u.email });
    if (!exists) {
      await repo.save(repo.create(u));
      console.log(`Usuário criado: ${u.email}`);
    }
  }

  await ds.destroy();
  console.log("Seed finalizado com sucesso.");
}

seed().catch((err) => {
  console.error("Erro no seed:", err);
  process.exit(1);
});
