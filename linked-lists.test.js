import { LinkedList } from "./linked-lists.js";

test("LinkedList.size() returns total number of nodes in the list", () => {
  const l = new LinkedList();
  l.append("apple");
  l.append("banana");
  expect(l.size()).toBe(2)
});