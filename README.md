# Companion Matcher - Mini Project Challenge

A full-stack application that allows users to create basic profiles, find matches based on shared interests, and shortlist potential companions.

---

## Objective

Build a simple companion matcher app that:

- Lets users create a basic profile
- Finds potential matches based on **at least 2 shared interests**
- Allows users to indicate interest in others (shortlist)

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js + Express.js
- **Database**: SQLite

---

## Example
## Sample Input

```json
{
  "name": "Amit",
  "age": 23,
  "interests": ["music", "tech", "sports", "gaming"]
}

## Sample Output

```json
[
  {
    "name": "Sanya",
    "interests": ["tech", "music", "reading"]
  },
  {
    "name": "Nikhil",
    "interests": ["sports", "gaming", "tech"]
  }
]
