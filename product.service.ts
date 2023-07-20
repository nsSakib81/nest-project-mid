import { Injectable } from "@nestjs/common";
import { product } from "./data/product.dto";
import { v4 as uuidv4 } from 'uuid';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { UserEntity } from 'src/product/registration.entity';

import { registration_Dto } from './registration.dto';
import { login_Dto } from "./login_dto";
import { Discount } from "./discount.dto";






@Injectable()
export class productService {
    public products : product[] = [];
   
    addProductService(product : product) : string {
        product.productId = uuidv4();
        this.products.push(product);
        return "Your product is added successfully";
    }


    updateProductService(product : product) : string {
        let index = this.products.findIndex((currentProduct)=>{
            return currentProduct.productId == product.productId;
        });
        this.products[index] = product;
        return "product updated successfully";
    }


    deleteProductService(productId : string) : string{
        this.products = this.products.filter((product)=>{
            return product.productId != productId;
        });
        return "product deleted";
    }


    findAllProducts(): product[] {
        return this.products;
    }



    constructor(

        @InjectRepository(UserEntity)

        private userRepo:

        Repository<UserEntity>,){}

       

        //registration user....

        async registrationuser(registration_dtoo: registration_Dto): Promise<any> {

          const User = await this.userRepo.findOne({ where: { name: registration_dtoo.name } });

     

          if (User) {

           

            return 'User exists!';

          } else {

            //const hashedPassword = await bcrypt.hash(registration_dtoo.password, 10);

            //registration_dtoo.password = hashedPassword;

            return this.userRepo.save(registration_dtoo);

          }

        }



        //login.....

      async login(login_dto: login_Dto): Promise<string> {

        const user = await this.userRepo.findOne({ where: { name: login_dto.name } });

   

        if (!user) {

          return 'Login unsuccessful: User not found';

        }

   

        if (user.password !== login_dto.password) {

          return 'Login unsuccessful: Incorrect password';

        }

       

        return 'Login successful';




      }
    }



        


    




