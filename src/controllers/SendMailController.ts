import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysService';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';
import { UserRepository } from '../repositories/UsersRepository';
import SendMailService from '../services/SendMailService';
import { resolve } from 'path';
import { AppError } from '../errors/AppError';

class SendMailController {
    async execute(request: Request, response: Response) {
        const { email, survey_id } = request.body;

        const userRepository = getCustomRepository(UserRepository);
        const surveysRepository = getCustomRepository(SurveysRepository);
        const surveyUsersRepository = getCustomRepository(SurveysUsersRepository);

        const userAlreadyExist = await userRepository.findOne({ email });
        if (!userAlreadyExist) {
            throw new AppError("User does not exists.")
        };

        const surveyAlreadyExist = await surveysRepository.findOne({ id: survey_id });
        if (!surveyAlreadyExist) {
            throw new AppError("Survey does not exists.")
        };

        const npsPath = resolve(__dirname, "..", "views", "emails", "npsMail.hbs");

        const surveyUserAlreadyExist = await surveyUsersRepository.findOne({
            where: { user_id: userAlreadyExist.id, value: null },
            relations: ["user", "survey"]
        });

        const variables = {
            name: userAlreadyExist.name,
            title: surveyAlreadyExist.title,
            description: surveyAlreadyExist.description,
            id: "",
            link: process.env.URL_MAIL,
        };

        if (surveyUserAlreadyExist) {
            variables.id = surveyUserAlreadyExist.id;
            await SendMailService.execute(email, surveyAlreadyExist.title, variables, npsPath);
            return response.json(surveyUserAlreadyExist);
        };

        const surveyUser = surveyUsersRepository.create({
            user_id: userAlreadyExist.id,
            survey_id
        });


        await surveyUsersRepository.save(surveyUser);

        variables.id = surveyUser.id;

        await SendMailService.execute(email, surveyAlreadyExist.title, variables, npsPath);

        return response.json(surveyUser);
    };
};

export { SendMailController };