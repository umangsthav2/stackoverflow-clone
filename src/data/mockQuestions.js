// mockQuestions.js
const mockQuestions = [
  {
    question_id: 1,
    question: "What is the default block size in HDFS for Hadoop 2.x?",
    creator_id: 1,
    content: 'Details about HDFS block size and its importance in data storage.',
    createDate: Date("2025-08-01"),
    comments: [1, 3, 5, 7],
    tags: ["Hadoop", "HDFS", "Big Data"]
  },
  {
    question_id: 2,
    question: "How does the Shuffle and Sort phase work in MapReduce?",
    creator_id: 1,
    content: 'Explaining the process of data transfer and sorting between Map and Reduce tasks.',
    createDate: Date("2025-08-02"),
    comments: [2, 4, 6, 8],
    tags: ["MapReduce", "Data Processing"]
  },
  {
    question_id: 3,
    question: "Explain the concept of YARN in Hadoop.",
    creator_id: 1,
    content: 'Discussing YARN as a resource manager and scheduler in the Hadoop ecosystem.',
    createDate: Date("2025-08-03"),
    comments: [1, 5, 9],
    tags: ["Hadoop", "YARN"]
  },
  {
    question_id: 4,
    question: "What are the core components of Apache Spark?",
    creator_id: 2,
    content: 'In-depth explanation of Spark Core, SQL, Streaming, MLlib, and GraphX.',
    createDate: Date("2025-08-04"),
    comments: [10, 11, 12],
    tags: ["Spark", "Architecture"]
  },
  {
    question_id: 5,
    question: "What is the role of NameNode in HDFS?",
    creator_id: 2,
    content: 'Defining NameNode\'s function as the master node for file system metadata.',
    createDate: Date("2025-08-05"),
    comments: [13, 14, 15],
    tags: ["HDFS", "NameNode", "Architecture"]
  },
  {
    question_id: 6,
    question: "How do you handle small files problem in HDFS?",
    creator_id: 2,
    content: 'Exploring solutions like using Hadoop Archives or SequenceFiles to manage small files.',
    createDate: Date("2025-08-06"),
    comments: [16, 17],
    tags: ["HDFS", "Optimization"]
  },
  {
    question_id: 7,
    question: "Differentiate between Hadoop 1.x and Hadoop 2.x.",
    creator_id: 2,
    content: 'Comparing the two major versions of Hadoop, focusing on the introduction of YARN.',
    createDate: Date("2025-08-07"),
    comments: [18, 19, 20],
    tags: ["Hadoop", "Comparison"]
  },
  {
    question_id: 8,
    question: "What is the key difference between HDFS and other file systems?",
    creator_id: 3,
    content: 'Discussing HDFS\'s distributed nature and fault tolerance.',
    createDate: Date("2025-08-08"),
    comments: [21, 22],
    tags: ["HDFS", "File System"]
  },
  {
    question_id: 9,
    question: "Explain the process of data ingestion in Hadoop.",
    creator_id: 3,
    content: 'Details about using tools like Sqoop and Flume for data loading.',
    createDate: Date("2025-08-09"),
    comments: [23, 24, 25],
    tags: ["Hadoop", "ETL"]
  },
  {
    question_id: 10,
    question: "How is Spark different from MapReduce?",
    creator_id: 4,
    content: 'Comparing in-memory processing of Spark with disk-based MapReduce.',
    createDate: Date("2025-08-10"),
    comments: [26, 27, 28, 29],
    tags: ["Spark", "MapReduce"]
  },
  {
    question_id: 11,
    question: "What is a DAG in Spark?",
    creator_id: 4,
    content: 'Explaining Directed Acyclic Graph and its role in Spark job execution.',
    createDate: Date("2025-08-11"),
    comments: [30, 31],
    tags: ["Spark", "DAG"]
  },
  {
    question_id: 12,
    question: "Explain the role of Spark Session.",
    creator_id: 4,
    content: 'Describing SparkSession as the entry point for Spark applications.',
    createDate: Date("2025-08-12"),
    comments: [32, 33],
    tags: ["Spark", "API"]
  },
  {
    question_id: 13,
    question: "What is the difference between RDD and DataFrame?",
    creator_id: 5,
    content: 'Comparing RDDs with the more structured and optimized DataFrames.',
    createDate: Date("2025-08-13"),
    comments: [34, 35, 36],
    tags: ["Spark", "RDD", "DataFrame"]
  },
  {
    question_id: 14,
    question: "How do you perform a join in Spark SQL?",
    creator_id: 5,
    content: 'Providing examples of different join types in Spark SQL.',
    createDate: Date("2025-08-14"),
    comments: [37, 38, 39, 40],
    tags: ["Spark", "SQL"]
  },
  {
    question_id: 15,
    question: "Explain the concept of partitioning in Spark.",
    creator_id: 5,
    content: 'Discussing how data is physically distributed across nodes.',
    createDate: Date("2025-08-15"),
    comments: [41, 42],
    tags: ["Spark", "Optimization"]
  },
  {
    question_id: 16,
    question: "What is a reducer in MapReduce?",
    creator_id: 6,
    content: 'Defining the role of a reducer in aggregating data.',
    createDate: Date("2025-08-16"),
    comments: [43, 44],
    tags: ["MapReduce", "Fundamentals"]
  },
  {
    question_id: 17,
    question: "What is a DataNode in HDFS?",
    creator_id: 7,
    content: 'Explaining the DataNode\'s function in storing data blocks.',
    createDate: Date("2025-08-17"),
    comments: [45, 46, 47],
    tags: ["HDFS", "Architecture"]
  },
  {
    question_id: 18,
    question: "How do you connect to a Hive Metastore?",
    creator_id: 7,
    content: 'Steps to configure and connect to a Hive Metastore from a client.',
    createDate: Date("2025-08-18"),
    comments: [48],
    tags: ["Hive", "Metastore"]
  },
  {
    question_id: 19,
    question: "What is a Kafka topic?",
    creator_id: 8,
    content: 'Defining a Kafka topic as a category or feed name where records are published.',
    createDate: Date("2025-08-19"),
    comments: [49, 50, 51],
    tags: ["Kafka", "Streaming"]
  },
  {
    question_id: 20,
    question: "What is a Zookeeper?",
    creator_id: 8,
    content: 'Explaining Zookeeper\'s role in managing and coordinating distributed systems.',
    createDate: Date("2025-08-20"),
    comments: [52, 53],
    tags: ["Zookeeper", "Hadoop"]
  },
  {
    question_id: 21,
    question: "Explain data warehousing vs data lake.",
    creator_id: 9,
    content: 'Comparing the two concepts in terms of structure, data types, and use cases.',
    createDate: Date("2025-08-21"),
    comments: [54, 55, 56],
    tags: ["Data Lake", "Data Warehouse"]
  },
  {
    question_id: 22,
    question: "How do you ensure data security in HDFS?",
    creator_id: 9,
    content: 'Discussing access control and authentication mechanisms in HDFS.',
    createDate: Date("2025-08-22"),
    comments: [57, 58],
    tags: ["HDFS", "Security"]
  },
  {
    question_id: 23,
    question: "What is the purpose of the Map phase in MapReduce?",
    creator_id: 9,
    content: 'Defining the Map phase\'s function of processing input data and generating key-value pairs.',
    createDate: Date("2025-08-23"),
    comments: [59, 60],
    tags: ["MapReduce", "Fundamentals"]
  },
  {
    question_id: 24,
    question: "How do you handle fault tolerance in MapReduce?",
    creator_id: 9,
    content: 'Explaining the role of the JobTracker and TaskTracker in fault recovery.',
    createDate: Date("2025-08-24"),
    comments: [61, 62, 63],
    tags: ["MapReduce", "Fault Tolerance"]
  },
  {
    question_id: 25,
    question: "What is the difference between Hive and Impala?",
    creator_id: 10,
    content: 'Comparing the query execution models of Hive and Impala.',
    createDate: Date("2025-08-25"),
    comments: [64, 65],
    tags: ["Hive", "Impala"]
  },
  {
    question_id: 26,
    question: "How to read a CSV file using PySpark?",
    creator_id: 11,
    content: 'Providing code examples for loading and processing CSV data with PySpark.',
    createDate: Date("2025-08-26"),
    comments: [66, 67, 68],
    tags: ["Spark", "PySpark"]
  },
  {
    question_id: 27,
    question: "What is a broadcast variable in Spark?",
    creator_id: 11,
    content: 'Explaining how to use broadcast variables to efficiently share large read-only datasets.',
    createDate: Date("2025-08-27"),
    comments: [69, 70],
    tags: ["Spark", "Optimization"]
  },
  {
    question_id: 28,
    question: "Explain the role of a Spark Driver.",
    creator_id: 12,
    content: 'Defining the Spark Driver as the main process running the application.',
    createDate: Date("2025-08-28"),
    comments: [71, 72],
    tags: ["Spark", "Architecture"]
  },
  {
    question_id: 29,
    question: "How do you set up a Spark cluster?",
    creator_id: 12,
    content: 'Step-by-step guide to configuring a Spark standalone cluster.',
    createDate: Date("2025-08-29"),
    comments: [73, 74, 75],
    tags: ["Spark", "Cluster"]
  },
  {
    question_id: 30,
    question: "What is a self-join in SQL?",
    creator_id: 13,
    content: 'Explaining how to join a table to itself to compare records within the same table.',
    createDate: Date("2025-08-30"),
    comments: [76, 77, 78],
    tags: ["SQL", "Databases"]
  },
  {
    question_id: 31,
    question: "Explain ACID properties in databases.",
    creator_id: 13,
    content: 'Details on Atomicity, Consistency, Isolation, and Durability.',
    createDate: Date("2025-08-31"),
    comments: [79, 80],
    tags: ["SQL", "Databases"]
  },
  {
    question_id: 32,
    question: "What is a primary key and foreign key?",
    creator_id: 13,
    content: 'Differentiating between primary and foreign keys and their roles in relationships.',
    createDate: Date("2025-09-01"),
    comments: [81, 82, 83],
    tags: ["SQL", "Databases"]
  },
  {
    question_id: 33,
    question: "How to optimize SQL queries for large datasets?",
    creator_id: 14,
    content: 'Tips for using indexes, avoiding `SELECT *`, and optimizing joins.',
    createDate: Date("2025-09-02"),
    comments: [84, 85, 86],
    tags: ["SQL", "Optimization"]
  },
  {
    question_id: 34,
    question: "Explain the difference between `UNION` and `UNION ALL`.",
    creator_id: 14,
    content: 'Discussing how `UNION` removes duplicates while `UNION ALL` retains all rows.',
    createDate: Date("2025-09-03"),
    comments: [87, 88],
    tags: ["SQL", "Syntax"]
  },
  {
    question_id: 35,
    question: "What is a Pandas DataFrame?",
    creator_id: 15,
    content: 'Defining DataFrame as a 2-D labeled data structure with columns of potentially different types.',
    createDate: Date("2025-09-04"),
    comments: [89, 90, 91],
    tags: ["Python", "Pandas"]
  },
  {
    question_id: 36,
    question: "How do you handle missing values in a Pandas DataFrame?",
    creator_id: 15,
    content: 'Providing examples of using `fillna()`, `dropna()`, and other methods.',
    createDate: Date("2025-09-05"),
    comments: [92, 93],
    tags: ["Python", "Pandas"]
  },
  {
    question_id: 37,
    question: "What is the `groupby()` method in Pandas?",
    creator_id: 15,
    content: 'Explaining how to use `groupby()` for aggregation and analysis.',
    createDate: Date("2025-09-06"),
    comments: [94, 95],
    tags: ["Python", "Pandas"]
  },
  {
    question_id: 38,
    question: "How can I convert a DataFrame to a CSV file?",
    creator_id: 16,
    content: 'Providing code snippet using `to_csv()` method.',
    createDate: Date("2025-09-07"),
    comments: [96, 97],
    tags: ["Python", "Pandas"]
  },
  {
    question_id: 39,
    question: "What is the Virtual DOM in React?",
    creator_id: 17,
    content: 'Explaining how the Virtual DOM improves performance in a React application.',
    createDate: Date("2025-09-08"),
    comments: [98, 99],
    tags: ["JavaScript", "React"]
  },
  {
    question_id: 40,
    question: "Explain the purpose of React Hooks.",
    creator_id: 18,
    content: 'Discussing the motivation for Hooks and how they allow using state and other React features without writing a class.',
    createDate: Date("2025-09-09"),
    comments: [100, 101, 102],
    tags: ["JavaScript", "React"]
  }
];

export default mockQuestions;