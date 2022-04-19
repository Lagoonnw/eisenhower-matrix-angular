import {faker} from '@faker-js/faker';
import {} from '@faker-js/faker'
import { User } from "../models/User";
import {ITask, Task} from "../models/Task";

// background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);

const getGradient = (important: boolean, urgent: boolean): string => `linear-gradient(to top, ${important ? ColorHex.maxImportant : ColorHex.minImportant} 0%, ${urgent ? ColorHex.maxUrgent : ColorHex.minUrgent} 100%)`
const getColors = (important: boolean, urgent: boolean) => [important ? ColorHex.maxImportant : ColorHex.minImportant, urgent ? ColorHex.maxUrgent : ColorHex.minUrgent];

export enum ColorHex {
    maxImportant = '#f56f4e',
    minImportant = '#6ebef6',
    maxUrgent = '#f9f047',
    minUrgent = '#0fd850'
}

export class DataGenerator {
    public static uuid(): string {
        return faker.datatype.uuid();
    }

    public static task(): Task {
        faker.setLocale('ru');
        const data: Partial<ITask> = {
            id: DataGenerator.uuid(),
            title: faker.lorem.paragraph(1),
            description: faker.lorem.paragraphs(2, '\n'),
            createdDate: faker.date.past(1),
            endDate: faker.date.future(1),
            lastEditedDate: faker.date.recent(150),
            isActive: faker.datatype.boolean(),
            isImportant: faker.datatype.boolean(),
            isUrgently: faker.datatype.boolean()
        }
        const task = new Task(data);
        task.colors = getColors(task.isImportant, task.isUrgently);
        task.gradient = getGradient(task.isImportant, task.isUrgently)

        return task;
    }

    public static tasks(count: number = 10) {
        const tasks: Task[] = [];
        for (let i = 0; i < count; i++) {
            tasks.push(DataGenerator.task());
        }
        return tasks;

    }


}
