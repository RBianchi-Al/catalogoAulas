import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid';

@Entity("modules")
class Modules {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    name: string;

    @Column()
    description: string;
    
    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid(); 
        }
    }
}
export {Modules}