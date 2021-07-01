import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClasses1625088688354 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "classes",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar"
                    },
                    {
                        name: "id_modules",
                        type: "uuid"
                    },
                    {
                        name: "id_users",
                        type: "uuid"

                    },
                    {
                        name: "date",
                        type: "timestamp"
                    },
                    { 
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"

                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys:[
                    {
                        name: "FKUsers",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["id_users"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                    {
                         name: "FKModules",
                         referencedTableName: "modules",
                         referencedColumnNames: ["id"],
                         columnNames: ["id_modules"],
                         onDelete: "SET NULL",
                         onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("classes")
    }

}
