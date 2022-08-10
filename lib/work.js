import { workData } from "../data/work";

export function getSortedWorkData() {
  return workData.sort((a, b) => {
    if (a.year < b.year) {
      return 1;
    } else {
      return -1;
    }
  });
}
