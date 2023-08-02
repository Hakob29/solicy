import { MigrationInterface, QueryRunner } from "typeorm";

export class Catalog1690994712454 implements MigrationInterface {
    name = 'Catalog1690994712454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`Catalog\` (\`id\` bigint NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`url\` varchar(255) NOT NULL, \`cost1\` int NOT NULL, \`cost2\` int NOT NULL, \`cost3\` int NOT NULL, \`req1\` int NOT NULL, \`req2\` int NOT NULL, \`req3\` int NOT NULL, \`category\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`Catalog\``);
    }

}
