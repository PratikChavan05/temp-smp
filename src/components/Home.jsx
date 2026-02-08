import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const cardHoverStyle = {
    transition: 'all 0.3s ease'
  };

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: 'var(--color-cream)',
      paddingTop: '60px'
    }}>
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--color-dark-navy)',
        padding: '50px 1.5rem',
        textAlign: 'center',
        boxShadow: 'var(--shadow-lg)'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <h1 style={{
            fontSize: 'clamp(1.75rem, 5vw, 3rem)',
            fontWeight: '800',
            color: 'var(--color-white)',
            marginBottom: '1rem',
            lineHeight: '1.2'
          }}>
            Pratik Patil's Academy
          </h1>
          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.35rem)',
            color: 'var(--color-cream)',
            lineHeight: '1.6',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Premier Coaching Institute for 11th & 12th Science Students
          </p>
          <div style={{
            marginTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '0.75rem'
          }}>
            {['JEE Mains', 'JEE Advanced', 'MHT-CET', 'NEET', 'Board Exams'].map((exam) => (
              <span key={exam} style={{
                backgroundColor: 'var(--color-cream)',
                color: 'var(--color-dark-navy)',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.9rem',
                fontWeight: '600'
              }}>
                {exam}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Action Buttons */}
      <section style={{
        padding: '2rem 1.5rem 1.5rem',
        backgroundColor: 'var(--color-cream)'
      }}>
        <div style={{
          maxWidth: '900px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem'
        }}>
          <Link to="/inquiry" style={{ textDecoration: 'none' }}>
            <div
              style={{
                backgroundColor: 'var(--color-white)',
                padding: '1.75rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer',
                border: '2px solid transparent',
                ...cardHoverStyle
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-dark-navy)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--color-dark-navy)',
                marginBottom: '0.75rem'
              }}>
                Make an Enquiry
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--color-dark-gray)',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Get detailed information about our courses, batch timings, fee structure, and admission process
              </p>
              <div style={{
                padding: '0.65rem 1.25rem',
                backgroundColor: 'var(--color-dark-navy)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-sm)',
                textAlign: 'center',
                fontWeight: '600',
                display: 'inline-block',
                width: '100%'
              }}>
                Submit Enquiry
              </div>
            </div>
          </Link>

          <Link to="/admission" style={{ textDecoration: 'none' }}>
            <div
              style={{
                backgroundColor: 'var(--color-white)',
                padding: '1.75rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-md)',
                cursor: 'pointer',
                border: '2px solid transparent',
                ...cardHoverStyle
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--color-dark-navy)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
            >
              <h3 style={{
                fontSize: '1.4rem',
                fontWeight: '700',
                color: 'var(--color-dark-navy)',
                marginBottom: '0.75rem'
              }}>
                Apply for Admission
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: 'var(--color-dark-gray)',
                lineHeight: '1.6',
                marginBottom: '1rem'
              }}>
                Ready to start your preparation? Fill the admission form and secure your seat in our upcoming batches
              </p>
              <div style={{
                padding: '0.65rem 1.25rem',
                backgroundColor: 'var(--color-dark-navy)',
                color: 'var(--color-white)',
                borderRadius: 'var(--radius-sm)',
                textAlign: 'center',
                fontWeight: '600',
                display: 'inline-block',
                width: '100%'
              }}>
                Apply Now
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Success Metrics */}
      <section style={{
        padding: '2rem 1.5rem',
        backgroundColor: 'var(--color-cream)'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',
            fontWeight: '700',
            color: 'var(--color-dark-navy)',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Our Achievements
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem'
          }}>
            {[
              { number: '500+', label: 'Students Trained' },
              { number: '150+', label: 'JEE Qualifiers' },
              { number: '200+', label: 'MHT-CET Selections' },
              { number: '75+', label: 'NEET Qualifiers' },
              { number: '100%', label: 'Board Pass Rate' },
              { number: '25+', label: 'Top 1000 Ranks' }
            ].map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-white)',
                  padding: '1.25rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-md)',
                  border: '2px solid transparent',
                  ...cardHoverStyle
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-dark-navy)';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
                  fontWeight: '800',
                  color: 'var(--color-dark-navy)',
                  marginBottom: '0.35rem'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: 'clamp(0.8rem, 2vw, 0.9rem)',
                  color: 'var(--color-dark-gray)',
                  fontWeight: '600',
                  lineHeight: '1.3'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Preparation Section */}
      <section style={{
        padding: '2.5rem 1.5rem',
        backgroundColor: 'var(--color-cream)'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: '700',
            color: 'var(--color-dark-navy)',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Comprehensive Exam Preparation
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.25rem'
          }}>
            {[
              {
                title: 'JEE Mains',
                description: 'Complete syllabus coverage with regular mock tests and doubt sessions for Engineering entrance'
              },
              {
                title: 'JEE Advanced',
                description: 'Advanced problem solving techniques and intensive training for IIT aspirants'
              },
              {
                title: 'MHT-CET',
                description: 'Maharashtra state exam focused preparation with previous year question analysis'
              },
              {
                title: 'NEET',
                description: 'Medical entrance exam preparation with focus on Biology, Physics, and Chemistry'
              },
              {
                title: 'State Board',
                description: '11th & 12th Maharashtra Board preparation with concept clarity and exam pattern practice'
              },
              {
                title: 'CBSE Board',
                description: 'Central Board preparation with comprehensive study material and regular assessments'
              }
            ].map((program, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-white)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-md)',
                  border: '2px solid transparent',
                  ...cardHoverStyle
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-dark-navy)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
              >
                <h3 style={{
                  fontSize: '1.2rem',
                  fontWeight: '700',
                  color: 'var(--color-dark-navy)',
                  marginBottom: '0.65rem'
                }}>
                  {program.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-dark-gray)',
                  lineHeight: '1.6'
                }}>
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{
        padding: '2.5rem 1.5rem',
        backgroundColor: 'var(--color-cream)'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
            fontWeight: '700',
            color: 'var(--color-dark-navy)',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}>
            Our Teaching Methodology
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem'
          }}>
            {[
              {
                title: 'Experienced Faculty',
                description: 'Learn from highly qualified teachers with years of experience in competitive exam coaching'
              },
              {
                title: 'Personalized Attention',
                description: 'Small batch sizes ensuring individual attention and doubt clearing for every student'
              },
              {
                title: 'Weekly Tests',
                description: 'Regular weekly assessments to track progress and improve time management skills'
              },
              {
                title: 'Study Material',
                description: 'Comprehensive notes, practice questions, and previous year papers for each subject'
              },
              {
                title: 'Performance Analysis',
                description: 'Detailed analysis of test performance with personalized feedback and improvement strategies'
              },
              {
                title: 'Doubt Sessions',
                description: 'Dedicated doubt clearing sessions and one-on-one guidance for difficult topics'
              },
              {
                title: 'Online Support',
                description: 'Access to online resources, video lectures, and digital study material anytime'
              },
              {
                title: 'Parent Updates',
                description: 'Regular communication with parents about student progress and performance'
              },
              {
                title: 'Competitive Environment',
                description: 'Healthy competition among peers to motivate and push students towards excellence'
              }
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'var(--color-white)',
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-md)',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--color-light-gray)',
                  ...cardHoverStyle
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-dark-navy)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-light-gray)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  color: 'var(--color-dark-navy)',
                  marginBottom: '0.65rem'
                }}>
                  {feature.title}
                </h3>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--color-dark-gray)',
                  lineHeight: '1.6'
                }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Batch Information */}
      <section style={{
        padding: '2.5rem 1.5rem',
        backgroundColor: 'var(--color-cream)'
      }}>
        <div style={{
          maxWidth: '1100px',
          margin: '0 auto'
        }}>
          <div style={{
            backgroundColor: 'var(--color-white)',
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            boxShadow: 'var(--shadow-lg)',
            border: '2px solid var(--color-dark-navy)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2rem)',
              fontWeight: '700',
              color: 'var(--color-dark-navy)',
              marginBottom: '1.25rem',
              textAlign: 'center'
            }}>
              Special Batch Programs
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginTop: '1.5rem'
            }}>
              {[
                {
                  title: 'Foundation Batches',
                  subtitle: 'For 11th Standard',
                  points: ['Basic concept building', 'Strong fundamentals', 'Board exam focus']
                },
                {
                  title: 'Target Batches',
                  subtitle: 'For 12th Standard',
                  points: ['JEE/NEET preparation', 'Advanced problem solving', 'Mock test series']
                },
                {
                  title: 'Crash Courses',
                  subtitle: 'Pre-Exam Preparation',
                  points: ['Revision of full syllabus', 'Important topics focus', 'Exam strategy']
                },
                {
                  title: 'Weekend Batches',
                  subtitle: 'For School Students',
                  points: ['Flexible timing', 'School syllabus aligned', 'Extra practice sessions']
                }
              ].map((batch, index) => (
                <div key={index} style={{
                  padding: '1.25rem',
                  backgroundColor: 'var(--color-cream)',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-light-gray)'
                }}>
                  <h3 style={{
                    fontSize: '1.15rem',
                    fontWeight: '700',
                    color: 'var(--color-dark-navy)',
                    marginBottom: '0.25rem'
                  }}>
                    {batch.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-dark-gray)',
                    marginBottom: '0.75rem',
                    fontWeight: '600'
                  }}>
                    {batch.subtitle}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {batch.points.map((point, idx) => (
                      <li key={idx} style={{
                        fontSize: '0.875rem',
                        color: 'var(--color-dark-gray)',
                        marginBottom: '0.4rem',
                        paddingLeft: '1rem',
                        position: 'relative'
                      }}>
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: 'var(--color-dark-navy)',
                          fontWeight: 'bold'
                        }}>•</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: 'var(--color-dark-navy)',
        padding: '2rem 1.5rem',
        textAlign: 'center'
      }}>
        <p style={{
          fontSize: '1.15rem',
          color: 'var(--color-white)',
          fontWeight: '700',
          marginBottom: '0.5rem'
        }}>
          Pratik Patil's Academy
        </p>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--color-cream)'
        }}>
          Your Path to Success in Competitive Exams
        </p>
      </footer>
    </div>
  );
};

export default Home;
