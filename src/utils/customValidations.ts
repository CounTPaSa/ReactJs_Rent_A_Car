import { AnyObject, TestContext } from "yup";

export const titleValidator = (value:string, context:TestContext<AnyObject>) =>
{
    return (/^[a-zA-Z0-9\s\-_&',.()!]+$/.test(value));
};