  // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('show');
            });
        });
        
        // FAQ Toggle
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.faq-answer').style.display = 'none';
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active');
                const answer = item.querySelector('.faq-answer');
                if (item.classList.contains('active')) {
                    answer.style.display = 'block';
                } else {
                    answer.style.display = 'none';
                }
            });
        });
        
        // Payment Method Selection
        const paymentMethods = document.querySelectorAll('.payment-method');
        paymentMethods.forEach(method => {
            method.addEventListener('click', () => {
                // Remove selected class from all
                paymentMethods.forEach(m => m.classList.remove('selected'));
                // Add selected class to clicked
                method.classList.add('selected');
            });
        });
        
        // Video Play Button
        const playBtn = document.getElementById('playBtn');
        playBtn.addEventListener('click', () => {
            alert('ভিডিওটি প্রদর্শিত হচ্ছে... (এই উদাহরণে একটি মডেল দেখানো হচ্ছে)');
        });
        
        // Form submission
        const form = document.getElementById('bookOrderForm');
        const modal = document.getElementById('successModal');
        const closeModal = document.querySelector('.modal-close');
        const continueBtn = document.getElementById('continueBtn');
        
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Check if payment method is selected
            const selectedMethod = document.querySelector('.payment-method.selected');
            if (!selectedMethod) {
                alert('অনুগ্রহ করে একটি পেমেন্ট পদ্ধতি নির্বাচন করুন');
                return;
            }
            
            // Show modal
            modal.style.display = 'flex';
        });
        
        // Close modal
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            form.reset();
            // Remove selected payment method
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
        });
        
        continueBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            form.reset();
            // Remove selected payment method
            document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
        });
        
        // Close modal when clicking outside
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                form.reset();
                // Remove selected payment method
                document.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
            }
        });
        
        // Make first FAQ open by default
        document.querySelector('.faq-item .faq-answer').style.display = 'block';
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                document.querySelector('header').style.padding = '10px 0';
                document.querySelector('header').style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            } else {
                document.querySelector('header').style.padding = '15px 0';
                document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            }
        });