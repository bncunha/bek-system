import { DefaultEntity } from "./DefaultEntity.class";
import { Get, Post } from "@nestjs/common";
import { create } from "domain";

export abstract class DefaultController {

	abstract findAll();
	abstract getOne();
	abstract create();
	abstract update();
	abstract delete();

}