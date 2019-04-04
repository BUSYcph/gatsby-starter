/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'react-jss';
import injectSheet from 'react-jss';
import AppShell from './AppShell';
import { Grid } from '@material-ui/core';

type ILayoutProps = {
	children: React.ReactChildren;
	classes: any;
}

const styles = theme => ({
	jumbotron: {
	  padding: '40px',
	  background: 'yellow',
	  margin: 0
	}
});

const Layout = ({ children, classes } : ILayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <AppShell>
        <ThemeProvider theme={{}}>
			<Grid container>
				<Grid item xs={12} md={4}>
					<div className={classes.jumbotron}>
						<main>{children}</main>
					</div>
				</Grid>
			</Grid>
        </ThemeProvider>
      </AppShell>
    )}
  />
)

export default injectSheet(styles)(Layout)