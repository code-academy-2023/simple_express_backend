# simple_express_backend

## REST API esimerkki ilman tietokantaa

Sovellus tehdään MVC-mallin mukaisesti ja tähän backendiin toteutetaan 
**Model** ja **Controller** osiot.

## Middleware

On funktio, joka suoritetaan ilman että sitä tarvitsee "kutsua".
Sen tunnistaa sanasta use.

## Tietokanta

Book-taulu
<pre>
create database library;
use library;

create table book(
    idBook int primary key auto_increment,
    name varchar(150),
    author varchar(50)
);

insert into book(name,author) values('Javan perusteet','Teppo Testi');
</pre>

Borrower-taulu
<pre>
create table borrower(
    idBorrower int primary key auto_increment,
    fname varchar(150),
    lname varchar(50)
);

insert into borrower(fname,lname) values('Teppo','Testi');
</pre>

