describe('navigation', () => {
    beforeEach(() => {
      Cypress.config('defaultCommandTimeout', 10000);
      cy.visitAndWaitFor('/');
      cy.get('h1').should('exist');
      // Ensure nav is fully loaded and interactive
      cy.get('nav')
        .should('be.visible')
        .and('not.be.disabled')
        .and('have.css', 'opacity', '1')
        .and('have.css', 'pointer-events', 'auto');
    });
  
    describe('About Us section', () => {
      beforeEach(() => {
        // Open About Us dropdown
        cy.get('nav').within(() => {
          // Hover over About Us to trigger dropdown
          cy.findByText('About Us').parent().trigger('mouseover');
  
          // Wait for dropdown menu to be visible and fully rendered
          cy.findByText('Our Team').should('be.visible');
        });
      });
  
      it('should navigate to About page', () => {
        cy.get('nav').within(() => {
          cy.findByText('About Us').click();
        });
        cy.url().should('contain', '/about');
        cy.get('h1').should('contain', 'About Us');
      });
  
      it('should navigate to Team page from About Us dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('Our Team').should('be.visible').click();
        });
        cy.url().should('contain', '/team');
        cy.get('h1').should('contain', 'The Team');
      });
  
      it('should navigate to History page from About Us dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('History').should('be.visible').click();
        });
        cy.url().should('contain', '/history');
        cy.get('h1').should('contain', 'History');
      });
  
      it('should navigate to FAQ page from About Us dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('FAQ').should('be.visible').click();
        });
        cy.url().should('contain', '/faq');
        cy.get('h1').should('contain', 'Frequently Asked Questions');
      });
  
      it('should navigate to Branding page from About Us dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('Branding').should('be.visible').click();
        });
        cy.url().should('contain', '/branding');
        cy.get('h1').should('contain', 'Branding');
      });
    });
  
    describe('Services section', () => {
      beforeEach(() => {
        // Open Services dropdown
        cy.get('nav').within(() => {
          // Hover over Services to trigger dropdown
          cy.findByText('Services').parent().trigger('mouseover');
  
          // Wait for dropdown menu to be visible and fully rendered
          cy.findByText('Podcast').should('be.visible');
        });
      });
  
      it('should navigate to Services page', () => {
        cy.get('nav').within(() => {
          cy.findByText('Services').click();
        });
        cy.url().should('contain', '/services');
        cy.get('h1').should('contain', 'Services');
      });
  
      it('should navigate to Podcast page from Services dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('Podcast').should('be.visible').click();
        });
        cy.url().should('contain', '/podcast');
        cy.get('h1').should('contain', 'Podcast');
      });
  
      it('should navigate to Scholarship page from Services dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('Scholarship').should('be.visible').click();
        });
        cy.url().should('contain', '/scholarship');
        cy.get('h1').should('contain', 'Scholarship');
      });
  
      it('should navigate to Project Rebuild page from Services dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('Project Rebuild').should('be.visible').click();
        });
        cy.url().should('contain', '/project_rebuild');
        cy.get('h1').should('contain', 'Project Rebuild');
      });
  
      it('should navigate to Corporate Training page from Services dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('Corporate Training').should('be.visible').click();
        });
        cy.url().should('contain', '/corporate-training');
        cy.get('h1').should('contain', 'Corporate Training');
      });
    });
  
    describe('Get Involved section', () => {
      beforeEach(() => {
        // Open Get Involved dropdown
        cy.get('nav').within(() => {
          // Hover over Get Involved to trigger dropdown
          cy.findByText('Get Involved').parent().trigger('mouseover');
  
          // Wait for dropdown menu to be visible and fully rendered
          cy.findByText('Chapters').should('be.visible');
        });
      });
  
      it('should navigate to Get Involved page', () => {
        cy.get('nav').within(() => {
          cy.findByText('Get Involved').click();
        });
        cy.url().should('contain', '/get_involved');
        cy.get('h1').should('contain', 'You Can Make An Impact');
      });
  
      it('should navigate to Chapters page from Get Involved dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('Chapters').should('be.visible').click();
        });
        cy.url().should('contain', '/chapters');
        cy.get('h1').should('contain', 'Chapters');
      });
  
      it('should navigate to Sponsorship page from Get Involved dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('Sponsorship').should('be.visible').click();
        });
        cy.url().should('contain', '/sponsorship');
        cy.get('h1').should('contain', 'Sponsorship');
      });
  
      it('should navigate to Merch Store page from Get Involved dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('Merch Store')
            .should('be.visible')
            .invoke('removeAttr', 'target') // Prevent opening in new tab
            .click();
        });
        cy.origin('https://operationcode.threadless.com', () => {
          cy.url().should('include', 'operationcode.threadless.com');
        });
      });
  
      it('should navigate to Contact Us page from Get Involved dropdown', () => {
        cy.get('nav').within(() => {
          cy.findByText('Contact Us').should('be.visible').click();
        });
        cy.url().should('contain', '/contact');
        cy.get('h1').should('contain', 'Contact Us');
      });
  
      it('should navigate to Donate page from Get Involved dropdown', () => {
        cy.get('nav').within(() => {
          cy.get('.NavListItem_linkContent__3FY_0').contains('Donate').should('be.visible').click();
        });
        cy.url().should('include', '/donate');
        cy.get('h1').should('contain', 'Donate');
      });
    });
  
    it('should navigate to standalone Donate page', () => {
      cy.get('nav').within(() => {
        cy.get('a.Nav_donateLink__fvw_z')
          .should('be.visible')
          .and('have.attr', 'href', '/donate')
          .click();
      });
      cy.url().should('include', '/donate');
      cy.get('h1').should('contain', 'Donate');
    });
  });