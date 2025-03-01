Implementation Decisions and Trade-offs

1. Unit Testing

   Planned: Write unit tests for each component using Jest and React Testing Library.

   Decision: Skipped unit tests due to time constraints.

   Impact: The app requires manual testing, increasing maintenance effort.

2. Service Request Type Input

   Planned: Use an enum-based dropdown for service request types to enforce consistency.

   Decision: Kept it as a text input since the specs required plain text.

   Impact: Users can enter inconsistent values, requiring data validation later.

3. Image Fetching from S3

   Planned: Fetch multiple image URLs in one request for efficiency.

   Decision: Used multiple getUrl calls since AWS Amplify Storage does not support batch retrieval.

   Impact: Slightly increased API calls but ensured each image URL was retrieved properly.

4. Hosting Strategy

   Planned: Use AWS Amplify Hosting for easy deployment.

   Decision: Chose Amplify Gen 1 for compatibility, manually adjusted the build directory.

   Impact: Required a npm run build step before running amplify publish.

5. Routing for Separate Features

   Planned: Use React Router to separate Service Requests and the Image Carousel into distinct routes.

   Decision: As it is not part of evaluation criteria, and for image carousel page there was not much to display in UI, decided to keep both features on the same page instead of separate routes.

   Impact: The UI may feel slightly cluttered, and navigation could be improved in future updates.
