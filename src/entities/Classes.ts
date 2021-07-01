import {Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, JoinColumn, ManyToOne} from "typeorm";
 
import {v4 as uuid} from 'uuid';
import { Modules } from "./Modules";
import { User } from "./Users";


@Entity("classes")
class Classes {
  @PrimaryColumn()
  readonly id: string; 

  @Column()
  name: string;

  @Column()
  id_users: string;

  @Column()
  date: Date;
 
  @JoinColumn({name: "id_users"})
  @ManyToOne(() => User)
  userId: User

  
  @Column()
  id_modules: string;

  @JoinColumn({name: "id_modules"})
  @ManyToOne(() => Modules)
  modulesId: Modules
  
  @CreateDateColumn()
  created_at: Date;
  
 @UpdateDateColumn()
  updated_at: Date;
  
 constructor(){
    if(!this.id){
        this.id = uuid();
    }
}
}

export {Classes}