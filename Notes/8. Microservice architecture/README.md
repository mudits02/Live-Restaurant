# Real World Architectures

1. ***SRP*** -> Single Responsibility Principle is a design pattern(Under the **SOLID** principles) which states that one service should do only one task or take only 1 responsibilty. This makes the code more maintainable and testable.<br><br>
2. ***API render cycle of react*** -> Generally in UI dev , we see there are two render cycles that can be followed

```mermaid
graph LR
    A[ Page Load ] --> B[ API Call ]
    B --> C[ Render ]
```

Above is the approach 1<br><br>

```mermaid
graph LR
    A [ Page Load ] --> B[ Render ]
    B --> C[ API Call ]
    C --> D[ Re Render ]
```
This is approach 2