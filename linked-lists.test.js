import { LinkedList } from "./linked-lists.js";

test("LinkedList.size() returns total number of nodes in the list", () => {
  const l = new LinkedList();
  l.append("apple");
  l.append("banana");
  expect(l.size()).toBe(2);
});

test("LinkedList.head() returns the value of the first node in the list", () => {
  const l = new LinkedList();
  l.append("apple");
  l.append("banana");
  expect(l.head()).toBe("apple");
});

test("LinkedList.head() returns undefined if list is empty", () => {
  expect(new LinkedList().head()).toBe(undefined);
});

test("LinkedList.tail() returns the value of the final node in the list", () => {
  const l = new LinkedList();
  l.append("apple");
  l.append("banana");
  expect(l.tail()).toBe("banana");
});

test("LinkedList.tail() returns undefined if list is empty", () => {
  expect(new LinkedList().tail()).toBe(undefined);
});
