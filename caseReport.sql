CREATE DATABASE capstone;

CREATE TABLE corona_cases(id serial PRIMARY KEY, test_date timestamp, site_name varchar, state text)