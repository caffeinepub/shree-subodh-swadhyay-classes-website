import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactForm {
    name: string;
    email: string;
    message: string;
    timestamp: bigint;
}
export interface Course {
    curriculum: string;
    title: string;
    description: string;
}
export interface backendInterface {
    addCourse(title: string, description: string, curriculum: string): Promise<void>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    getAllCourses(): Promise<Array<Course>>;
    getCourse(title: string): Promise<Course>;
    submitContactForm(name: string, email: string, message: string, timestamp: bigint): Promise<void>;
}
