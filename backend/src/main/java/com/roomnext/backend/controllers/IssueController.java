package com.roomnext.backend.controllers;

import com.roomnext.backend.entities.Blocker;
import com.roomnext.backend.entities.Issue;
import com.roomnext.backend.entities.TestCase;
import com.roomnext.backend.repositories.BlockerRepository;
import com.roomnext.backend.repositories.IssueRepository;
import com.roomnext.backend.repositories.TestCaseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/issues")
@CrossOrigin(origins = "*")
public class IssueController {
    @Autowired
    private IssueRepository issueRepository;

    @GetMapping
    public List<Issue> getAllIssues() {
        return issueRepository.findAll();
    }

    @PostMapping
    public Issue createIssue(@RequestBody Issue issue) {
        return issueRepository.save(issue);
    }
}

@RestController
@RequestMapping("/api/blockers")
@CrossOrigin(origins = "*")
class BlockerController {
    @Autowired
    private BlockerRepository blockerRepository;

    @GetMapping
    public List<Blocker> getAllBlockers() {
        return blockerRepository.findAll();
    }
}

@RestController
@RequestMapping("/api/test-cases")
@CrossOrigin(origins = "*")
class TestCaseController {
    @Autowired
    private TestCaseRepository testCaseRepository;

    @GetMapping
    public List<TestCase> getAllTestCases() {
        return testCaseRepository.findAll();
    }
}
