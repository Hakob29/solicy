import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMig1691009752414 implements MigrationInterface {
    name = 'NewMig1691009752414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_f131c2b014e989b7355ccd6b46\` ON \`User\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_f131c2b014e989b7355ccd6b46\` ON \`User\` (\`assetId\`)`);
    }

}
