import { writable } from "svelte/store";

export const route = writable("login");
// possible values
/*
    login
    sign_up
    blog list
    edit_blog, read_blog, create_blog } one component
*/