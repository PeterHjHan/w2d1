# What happen when...
Reasons to know what is going on when building an application;
You require to know the SOFTWARE portion of it for the troubleshooting portion

### DNS solution
IP (INternet Protocl) Address.
works in the following
On average, DNS resolution takes 300-500 ms
  1. Hosts file - a text file on EVERY single OS. contains aliases for IP addresses.
    * Linux/Mac - etc/hosts
    * Windows - C:\Windows\System32\drivers\etc\hosts
    * 127.0.0.1 localhost 
  2. DNS Cache - Part of the OS
    * applies to entire machine 
    * browser DNS is specific to the application itself 
    * key-value store
      * Key is domain name;
      * value contains important data
        1. IP Address
        2. TTL - Time to Live (expiration date for the IP)
          * how long the IP address is good for
  3. Internic - TOP OF THE CHAIN
    * Definitive domain name server on the internet

Side note: IPv6 vs IPv4 

### Server
  * Software that is listening for an incoming request (not the hardware itself)


### Address rewriting
  * What does the "protocol" in english actually mean? 
  * putting the http: means to follow the sprcific protocol to follow
  * the // in http:// says that this is a remote address
  * Port
    *  Entry and exit point for a particular application 
    * http: = 80, https: = 443
  * http://IP:80/ the Path is the /
    * Resource Path
      * HTTP is a **resource**-based protocol
        * loading RESOURCES and not really actual files itself 
        * getting the http://mywebsite.com/users 
          * gets the RESOURCE of the users but if we put .jpg, .xlsx, .pdf
            * this only changes the format of the file but still pulls all the files of the "users", the RESOURCE does not change
  * after the ? in the URL is the query list (? = query selector)
  * # = page fragment 

### URI vs URL
  * URI - Unifrom Resource Indicator
  * URL - UNiform Resource Locator
  * ALl URLS are URIs, Not all URIs are URLs,
    * the URLs are only for the WEB
    * LOL games uses URI

### HTTP Request
  * Is just text 
  * have main two pards - header and a body
    * Header - URI, HTTP Verb
      * HTTP Verbs
        * GET, POST, PUT, PATCH, DELETE
        * these are the main ones, there are about 18 in total
        * Get - Request a copy of a resource (Read-only)
        * Post - sending a new resource to the server
        * put - updating a resource, sends a new copy to the server
        * patch - updating a resource, only sending changed data to the server
        * delete - delete a resource
        * Example: updating a user's information in a company
          * I want to update my email, there are two ways
            * POST = Updating the FULL user information
            * PATCH = just updating the email address
        * when the customer is sending information to a server, POST, PUT and PATCH data are put on the BODY of the data
        * User-agent = how the client identifies what application it is
  * Cookies are up to 4k i size just plain-text
  * remember it is on the Key-Value connection (just like json) 

  * from the client's perspective, the internet is not shown, only is wanting the response

### HTTP Response