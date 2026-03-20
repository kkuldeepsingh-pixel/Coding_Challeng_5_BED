export interface Resource {
  id: number;
  title: string;
  type: string;
  url: string;
  description?: string;
  createdAt: string;
}

let resources: Resource[] = [
  { id: 1, title: "Express.js Guide", type: "documentation", url: "https://expressjs.com/en/guide", description: "Official Express.js documentation", createdAt: new Date().toISOString() }
];

let currentId = 2;

export const getResourceById = (id: number) => resources.find(r => r.id === id) || null;
export const getAllResources = () => resources;
export const createResource = (data: Omit<Resource, "id" | "createdAt">) => {
  const newResource: Resource = { id: currentId++, createdAt: new Date().toISOString(), ...data };
  resources.push(newResource);
  return newResource;
};