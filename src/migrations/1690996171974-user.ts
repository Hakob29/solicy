import { MigrationInterface, QueryRunner } from "typeorm";

export class User1690996171974 implements MigrationInterface {
    name = 'User1690996171974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`User\` (\`address\` varchar(255) NOT NULL, \`cash1\` decimal(6,2) NOT NULL, \`cash2\` decimal(6,2) NOT NULL, \`cash3\` decimal(6,2) NOT NULL, PRIMARY KEY (\`address\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`User\``);
    }

}
