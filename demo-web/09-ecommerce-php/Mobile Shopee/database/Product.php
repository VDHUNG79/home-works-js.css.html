<?php

// Use to fetch product data
class Product {
    public $db = null;

    public  function __construct(DBController $db) {
        if (!isset($db->con)) return null;
        $this->db = $db;
    }

    // fetch product data using getData Method
    public function getData($table = 'product') {
    $this->db->con->query("SELECT * FROM {$table}");
    }
}
