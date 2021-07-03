import { writable } from "svelte/store";

export const route = writable("");
// possible values
/*
    login
    sign_up
    blog_list
    edit_blog, read_blog, create_blog } one component
*/
