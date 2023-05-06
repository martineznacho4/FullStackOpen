```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: JSON, note created message
    deactivate server

    Note right of browser: The browser renders the new note from the fetched Javascript code
```