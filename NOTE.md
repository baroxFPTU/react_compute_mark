# Project: Compute High School Mark

Date start: 2022-02-02

# Features

- Dark mode
- Compute graduated mark.
- Compute semester mark (comming soon)
- Compute subject mark (comming soon)
- check mark (comming soon)
- check mark of university (comming soon)

# Packages

- UI:
  - Mantine
- State:
  - Redux Toolkit
  - React Redux
- Validate Form:
  - Formik
- Form Selection:
  - React Select

# File Structure

```
__components
  |
  |__Button
  |__Form
     |__ InputForm
     |__ SelectForm
__features
  __Calculation
     |__components
        |__GraduateCalcForm
        |__GraduateResult
        |__SemesterCalcForm
        ...
     |__pages
        |__GraduatedCalc
        |__SemesterCalc
        |__SubjectCalc
  __Checking (comming soon)
__store
  |_reducers
  |_slices
  |_actions
  |_index.js
__services
  |_Calculating
    |__GraduatedMark
    |__SemesterMark
    |__SubjectMark
index.js
```

# Logic

- Requirements:

  - Math
  - Literature
  - English // Language
  - Free Mark -> have Help to calc -> choose field (KHTN / KHXH).
  - Encourage & Piority Mark

- Get all requirements -> put into object -> push to function -> get final [status, result];
