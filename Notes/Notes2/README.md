# npm, React and Bundlers

1. ***package,json*** is the configuration of your npm. After we have done **npm init** , we have initialized npm in the system and after it we can install all the required packages in our system<br><br>
2. To install ***parcel (bundler that we are using)*** in our project as a **Dev** dependecy , we will do 
   ```
   npm install -D parcel
   ```
3. **^** or *caret* is there in *package.json* because it will automatically install a minor version of parcel i.e. for example from 2.12.0 to 2.12.1 or 2.12.0 to 2.13.0 while if we use **~** or *tilde* , then it is for a ***patch*** update or a major update like the major version change from version 2 to version 3 , then **~** is used<br><br>
4. ***package-lock.json*** in simple terms locks the versions and keeps a track of the specific versions of each and every npm package version we are using.<br><br>
5. ***package-lock.json*** ensures that the same versions of dependencies are installed across all environments, promoting consistency.<br><br>
6. ***package.json*** on the other hand Defines the metadata for the project, such as the name, version, description, author, and license. Lists dependencies and devDependencies required for the project. Specifies scripts for various tasks (e.g., start, test, build).
7. In ***packgae-lock.json*** , every dependency has a object called **registry** and it has **SHA512** hashing because t ensures that exactly the same dependency is there in both local and deployed device so that it works in all machine and not just local<br><br>
8. ***Transitive Dependencies*** means when a dependency needs another dependency to work. That is why each sub dependency in **node_modules** has its own ***package-lock.json***. <br><br>
9. Another use of having ***package.json*** and ***package-lock.json*** is that we just have to 
```
    npm install
```
and both files will automatically install all the dependencies in the node_modules. So in every project when we see that projects get easily initialized in the local machine(any js project) happens becuase of this only.<br><br>
10. ``` npx parcel index.html ``` is used to start the server for the React App which we build<br><br>
11. Also , CDN is not a preferred way to import React or any library because of many reasons
        1.  Computationally Expensive
        2.  Better to use from locally installed modules than to do a network call
        3. Versioning issues
    <br><br>

12. 

   