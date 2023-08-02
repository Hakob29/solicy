import { MigrationInterface, QueryRunner } from "typeorm";

export class Produtandasset1691004943952 implements MigrationInterface {
    name = 'Produtandasset1691004943952'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Asset\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`type\` int NOT NULL, \`level\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Product\` (\`address\` varchar(255) NOT NULL, \`id\` int NOT NULL, PRIMARY KEY (\`address\`, \`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Product\``);
        await queryRunner.query(`DROP TABLE \`Asset\``);
    }

}
