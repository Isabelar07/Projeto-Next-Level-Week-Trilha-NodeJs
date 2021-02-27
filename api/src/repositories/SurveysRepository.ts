import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../models/Surveys";
import { User } from "../models/User";

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey>{}

export { SurveysRepository };