package com.project.www.config;

import com.project.www.config.oauth2.PrincipalOauth2UserService;
import com.project.www.config.oauth2.SellerPrincipalDetailsService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Slf4j
@RequiredArgsConstructor
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private PrincipalOauth2UserService PrincipalDetailsService;

    @Autowired
    private com.project.www.config.oauth2.PrincipalDetailsService principalDetailsService;

    @Autowired
    private SellerPrincipalDetailsService sellerPrincipalDetailsService;


    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean
    AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration) throws  Exception{
        return  authenticationConfiguration.getAuthenticationManager();
    }
    @Bean
    @Order(5)
    SecurityFilterChain CustomerFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll())
                .formLogin((auth) -> auth.loginPage("/login/form")
                        .loginProcessingUrl("/login/form")
                        .usernameParameter("id")
                        .passwordParameter("pw")
                        .successHandler(new CustomAuthenticationSuccessHandler())
                        .failureHandler(new CustomAuthenticationFailureHandler()))
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .invalidateHttpSession(true)
                        .deleteCookies("recentView")
                        .deleteCookies("JSESSIONID")
                        .logoutSuccessUrl("/"))
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/login/form")
                        .successHandler(new CustomAuthenticationSuccessHandler())
                        .userInfoEndpoint(userInfo -> userInfo
                                .userService(PrincipalDetailsService)));
        http.userDetailsService(principalDetailsService);
        return http.build();
    }
    @Bean
    @Order(3)
    SecurityFilterChain SellerFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .securityMatcher("/login/seller/form")
                .authorizeHttpRequests(authorize -> authorize
                        .anyRequest().permitAll())
                .formLogin(form -> form.loginPage("/login/seller/form")
                        .loginProcessingUrl("/login/seller/form")
                        .usernameParameter("id")
                        .passwordParameter("pw")
                        .defaultSuccessUrl("/")
                        .failureHandler(new CustomAuthenticationFailureHandler()))
                .logout(logout -> logout
                        .logoutUrl("/logout")
                        .invalidateHttpSession(true)
                        .deleteCookies("recentView")
                        .deleteCookies("JSESSIONID"));
        http.userDetailsService(sellerPrincipalDetailsService);

        return http.build();
    }
}