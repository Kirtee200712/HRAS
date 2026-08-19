-- V1__init.sql
-- Initial Schema for RoomNext Project

CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role VARCHAR(50),
    created_at TIMESTAMP
);

CREATE TABLE tasks (
    id BIGSERIAL PRIMARY KEY,
    task_id VARCHAR(50) UNIQUE,
    title VARCHAR(255),
    description TEXT,
    task_type VARCHAR(100),
    assignee VARCHAR(255),
    priority VARCHAR(50),
    status VARCHAR(50),
    due_date VARCHAR(50),
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

CREATE TABLE issues (
    id BIGSERIAL PRIMARY KEY,
    issue_id VARCHAR(50) UNIQUE,
    title VARCHAR(255),
    severity VARCHAR(50),
    module VARCHAR(100),
    assignee VARCHAR(255),
    status VARCHAR(50),
    created_at TIMESTAMP
);

CREATE TABLE blockers (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    affects_module VARCHAR(100),
    owner VARCHAR(255),
    expected_resolution VARCHAR(100),
    status VARCHAR(50),
    created_at TIMESTAMP
);
