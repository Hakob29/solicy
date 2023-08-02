import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1691009276956 implements MigrationInterface {
    name = 'NewMigration1691009276956'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`assetId\` bigint NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD UNIQUE INDEX \`IDX_f131c2b014e989b7355ccd6b46\` (\`assetId\`)`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`productAddress\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD \`productId\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_f131c2b014e989b7355ccd6b46\` ON \`User\` (\`assetId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_3d2474ae8d9c81fe9ae3ff5645\` ON \`User\` (\`productAddress\`, \`productId\`)`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_f131c2b014e989b7355ccd6b468\` FOREIGN KEY (\`assetId\`) REFERENCES \`Asset\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`User\` ADD CONSTRAINT \`FK_3d2474ae8d9c81fe9ae3ff56459\` FOREIGN KEY (\`productAddress\`, \`productId\`) REFERENCES \`Product\`(\`address\`,\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_3d2474ae8d9c81fe9ae3ff56459\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP FOREIGN KEY \`FK_f131c2b014e989b7355ccd6b468\``);
        await queryRunner.query(`DROP INDEX \`REL_3d2474ae8d9c81fe9ae3ff5645\` ON \`User\``);
        await queryRunner.query(`DROP INDEX \`REL_f131c2b014e989b7355ccd6b46\` ON \`User\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`productId\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`productAddress\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP INDEX \`IDX_f131c2b014e989b7355ccd6b46\``);
        await queryRunner.query(`ALTER TABLE \`User\` DROP COLUMN \`assetId\``);
    }

}
