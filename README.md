# English-Janala-Website.

#New Things learned from this website =>
- VS Code = view -> word wrap.

- Step 01 => 
1. We give url to fetch(). 
        => it is a function which uses to send request to the server.
2. It sends a request to that server.
3. It returns a Promise (because the response takes time).
        => we handle response in JSON, text or other format.

- Step 02 =>
1. .then (response => response.json())
        => we take the response inside response veriable and convert it into json. 
2. .then (data => peint/ pass etc.)
        => we take the json and er can pass or use that. 