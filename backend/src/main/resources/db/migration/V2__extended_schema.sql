-- V2__extended_schema.sql
-- Sub-domains for RoomNext

CREATE TABLE activities (
    id BIGSERIAL PRIMARY KEY,
    user_email VARCHAR(255),
    action VARCHAR(100),
    target_title VARCHAR(255),
    target_type VARCHAR(100),
    created_at TIMESTAMP
);

CREATE TABLE meetings (
    id BIGSERIAL PRIMARY KEY,
    title VARCHAR(255),
    scheduled_time TIMESTAMP,
    participant_count INT,
    agenda TEXT,
    notes TEXT,
    created_at TIMESTAMP
);

CREATE TABLE test_cases (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255),
    module VARCHAR(255),
    status VARCHAR(50),
    error_log TEXT
);
