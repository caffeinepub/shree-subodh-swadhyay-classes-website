import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Text "mo:core/Text";

actor {
  type ContactForm = {
    name : Text;
    email : Text;
    message : Text;
    timestamp : Int;
  };

  module ContactForm {
    public func compare(form1 : ContactForm, form2 : ContactForm) : Order.Order {
      Int.compare(form2.timestamp, form1.timestamp);
    };
  };

  type Course = {
    title : Text;
    description : Text;
    curriculum : Text;
  };

  module Course {
    public func compare(course1 : Course, course2 : Course) : Order.Order {
      Text.compare(course1.title, course2.title);
    };
  };

  let contactForms = Map.empty<Text, ContactForm>();

  let courses = Map.empty<Text, Course>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text, timestamp : Int) : async () {
    let form : ContactForm = {
      name;
      email;
      message;
      timestamp;
    };
    contactForms.add(timestamp.toText(), form);
  };

  public shared ({ caller }) func addCourse(title : Text, description : Text, curriculum : Text) : async () {
    let course : Course = {
      title;
      description;
      curriculum;
    };
    courses.add(title, course);
  };

  public query ({ caller }) func getCourse(title : Text) : async Course {
    switch (courses.get(title)) {
      case (null) { Runtime.trap("Course not found") };
      case (?course) { course };
    };
  };

  public query ({ caller }) func getAllCourses() : async [Course] {
    courses.values().toArray().sort();
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.values().toArray().sort();
  };
};
