import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "@/sanity/schemas";

const config = defineConfig({
    projectId: "rug7wk1f",
    dataset: "production",
    title: "Peyton Critchfield",
    apiVersion: "2023-11-20",
    basePath: "/admin",
    plugins: [deskTool()],
    schema: { types: schemas}
});

export default config;