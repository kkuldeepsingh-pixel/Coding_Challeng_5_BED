import { getResourceById, createResource } from "../src/api/v1/services/resourceService";

describe("Resource Service", () => {
  test("should return resource when ID exists", () => {
    const id = 1;
    const result = getResourceById(id);
    expect(result).not.toBeNull();
    expect(result?.id).toBe(1);
  });

  test("should return null when ID does not exist", () => {
    const result = getResourceById(999);
    expect(result).toBeNull();
  });

  test("should create a new resource", () => {
    const data = { title: "Test", type: "article", url: "https://test.com", description: "desc" };
    const result = createResource(data);
    expect(result).toHaveProperty("id");
    expect(result.title).toBe(data.title);
  });
});